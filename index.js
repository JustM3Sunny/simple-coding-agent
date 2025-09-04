#!usr/bin/env node

import { program } from 'commander'
import { GoogleGenAI } from "@google/genai";

const prompt = "this is an test prompt"
program
    .version("0.0.1")
    .description("a simple cli agent tool")
    .option("--v --versbose", "set to versbose mode", false)
    .option("--apikey <type>", "set gemini api key")
    .action(async (input) => {
        const ai = new GoogleGenAI({ apiKey: input.apiKey });
        if (input.verbose) {
            console.log('genai initalize')
        }
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite"
            , contents: prompt
        })
        console.log(response.text);
    })
program.parseAsync(process.argv)
