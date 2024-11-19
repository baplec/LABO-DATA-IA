import { Prompt, CreatePrompt } from "../schemas/prompt";

const API_URL = process.env.REACT_APP_BASE_URL;

export const createPrompt = async (promptData: CreatePrompt): Promise<Prompt> => {
    const response = await fetch(`${API_URL}/prompt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // No auth for the moment
        },
        body: JSON.stringify(promptData),
    });

    if (!response.ok) {
        throw new Error("Failed to create prompt");
    }

    const data = await response.json();
    return data;
};