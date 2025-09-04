#!usr/bin/env node

import { program } from 'commander'
import { GoogleGenAI } from "@google/genai";
import readline from 'readline'
import { stdin, stdout } from 'process';
const prompt = "this is an test prompt"

async function startIntractiveLoop(ai , verbose) {
    const rl = readline.createInterface({
        input:stdin,
        output:stdout,
        prompt:'sia > '
    })
    rl.prompt()
}
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
        // const response = await ai.models.generateContent({
        //     model: "gemini-2.5-flash-lite"
        //     , contents: prompt
        // })
        // console.log(response.text);
        startIntractiveLoop(ai,input.verbose)
    })
program.parseAsync(process.argv)
