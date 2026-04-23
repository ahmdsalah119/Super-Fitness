import bgImg from "../../assets/workout-section/background.jpg";
import Cards from "./cards";
import { useState, useEffect } from "react";
import {
  getMuscles,
  getExercisesByMuscle,
} from "../../lib/actions/workout.actions";

// types
type Muscle = {
  _id: string;
  name: string;
};

type Workout = {
  id: string;
  title: string;
  img: string;
};

type WorkoutApi = {
  _id: string;
  name: string;
  gifUrl?: string;
  image?: string;
};

// component
export default function WorkoutSection() {
  const [muscles, setMuscles] = useState<Muscle[]>([]);

  // Initialize with empty string
  const [selectedMuscle, setSelectedMuscle] = useState<string>("");

  //   State for workouts, loading, and error handling
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 3;

  //   Fetch muscles on component mount
  useEffect(() => {
    const fetchMuscles = async () => {
      try {
        const res = await getMuscles();
        const muscleData = res?.musclesGroup || res?.data || res?.muscles || [];

        setMuscles(muscleData);

        // Automatically select the first muscle so the section isn't empty on load
        if (muscleData.length > 0) {
          setSelectedMuscle(muscleData[0]._id);
        }
      } catch (err) {
        console.error("Failed to fetch muscles:", err);
      }
    };

    fetchMuscles();
  }, []);

  //   Fetch exercises on selected muscle change
  useEffect(() => {
    // Only fetch if we have a selectedMuscle ID
    if (!selectedMuscle) return;

    const fetchWorkouts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await getExercisesByMuscle(selectedMuscle);

        const list: WorkoutApi[] = res?.muscles || res?.data || [];

        const formatted: Workout[] = list.map((item: WorkoutApi) => ({
          id: item._id,
          title: item.name,
          img: item.image || item.gifUrl || "",
        }));

        setWorkouts(formatted);
        setCurrentPage(1);
      } catch (err) {
        setError("Failed to load workouts.");
        setWorkouts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, [selectedMuscle]);

  // pagination logic
  const totalPages = Math.min(5, Math.ceil(workouts.length / ITEMS_PER_PAGE));

  const currentWorkouts = workouts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="py-16 w-full bg-cover bg-center bg-no-repeat h-[760px] overflow-hidden text-secondary relative"
    >
      {/* overlay */}
      <div className="absolute top-[5%] h-[50%] w-full inset-0 bg-white/60 dark:bg-black/60 z-0"></div>
      {/* content */}
      <div className="relative z-10 max-w-[1285px] mx-auto w-full px-8 py-4">
        {/* title */}
        <h1 className="text-3xl tracking-tight leading-tight uppercase mb-6">
          Transform Your Body with Our <br />
          Dynamic
          <span className="text-primary"> Upcoming Workouts</span>
        </h1>

        <div className="flex gap-1 items-center mb-4 flex-wrap justify-center">
          {/* Mapping only real muscles from API */}
          {muscles.slice(0, 7).map((muscle) => (
            <button
              key={muscle._id}
              onClick={() => setSelectedMuscle(muscle._id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                selectedMuscle === muscle._id
                  ? "bg-primary text-secondary"
                  : "bg-transparent text-secondary"
              }`}
            >
              {muscle.name}
            </button>
          ))}
        </div>

        {/* cards */}
        <div className="min-h-[600px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-white animate-pulse">Loading workouts...</p>
            </div>
          ) : error ? (
            <p className="text-center text-red-400 mt-20">{error}</p>
          ) : currentWorkouts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {currentWorkouts.map((workout) => (
                <Cards
                  key={workout.id}
                  title={workout.title}
                  img={workout.img}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-white mt-20">No workouts found.</p>
          )}
        </div>
        {/* pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`transition-all duration-500 rounded-full ${
                    currentPage === pageNum
                      ? "bg-primary w-6 h-2"
                      : "bg-secondary w-2 h-2"
                  }`}
                  aria-label={`Go to page ${pageNum}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};