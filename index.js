#!usr/bin/env node

import {program} from 'commander'

program 
    .version("0.0.1")
    .description("a simple cli agent tool")
    .option("--v --versbose","set to versbose mode",false)
    .option("--apikey <type>","set gemini api key").action(async (input) => {
        console.log("recived :",input)
    })
    program.parseAsync(process.argv)
