import type { ApiResponse, SignupFormData } from "../types/auth";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function signupUser(
  data: Omit<SignupFormData, "confirmPassword" | "terms">
): Promise<ApiResponse> {
  try {
    const response = await fetch("https://auth.guimox.dev/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        result.message || "Signup failed",
        result.errors
      );
    }

    return result;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors
    throw new ApiError(
      0,
      "Network error. Please check your connection and try again."
    );
  }
}
