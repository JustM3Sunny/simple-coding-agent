#!usr/bin/env node

import { program } from 'commander'
import { GoogleGenAI } from "@google/genai";
import readline from 'readline'
import { stdin, stdout } from 'process';
const prompt = "this is an test prompt"

async function startIntractiveLoop(ai, verbose) {
    let history = [];

    const rl = readline.createInterface({
        input: stdin,
        output: stdout,
        prompt: 'sia > '
    })
    rl.prompt()
    rl.on('line', async (input) => {
        const trimmed = input.trim()
        if (input == "exit") {
            rl.close()
            console.log("Thanks for Using! Made by Dev❤️ For Devs.")
            return
        } if (trimmed) {
            //add user msg and conv to history 
            history.push({ role: 'user', parts: [{ text: trimmed }] })

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-lite"
                , contents: history
            })
            console.log(response.text);
            history.push({role:"model",parts:[{text:response.text}]})
        }
    })

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

        startIntractiveLoop(ai, input.verbose)
    })
program.parseAsync(process.argv)
