const baseUrl = "https://fitness.elevateegy.com/api/v1";

export const getMuscles = async () => {
  const response = await fetch(`${baseUrl}/muscles`);
  return await response.json();
};

export const getExercisesByMuscle = async (_id: string) => {
  const response = await fetch(`${baseUrl}/musclesGroup/${_id}`);
  return await response.json();
};
