declare type MuscleGroup = {
  _id: string;
  name: string;
};

declare type Muscle = {
  _id: string;
  name: string;
  image?: string;
};

declare type MusclesResponse = {
  message: string;
  musclesGroup: MuscleGroup[];
};

declare type MuscleGroupResponse = {
  message: string;
  muscleGroup: MuscleGroup;
  muscles: Muscle[];
};