import { useState } from "react";
import { createPrompt } from "../services/promptService";
import { Prompt, CreatePrompt} from "../schemas/prompt";

export const usePrompt = () => {
    const [prompt, setPrompt] = useState<Prompt[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const addPrompt = async (promptData: CreatePrompt) => {
        setLoading(true);
        try {
            const newPrompt = await createPrompt(promptData);
            setPrompt((prevPrompts) => [...prevPrompts, newPrompt]);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { prompt, loading, error, addPrompt };
};