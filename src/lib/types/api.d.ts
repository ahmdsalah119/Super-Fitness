declare type SuccessResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
