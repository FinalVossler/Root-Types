export interface IErrorResponse {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
}
