const variables = `
    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 0 0% 95%;
      --card: 24 9.8% 10%;
      --card-foreground: 0 0% 95%;
      --popover: 0 0% 9%;
      --popover-foreground: 0 0% 95%;
      --primary: 142.1 70.6% 45.3%;
      --primary-foreground: 144.9 80.4% 10%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --muted: 0 0% 15%;
      --muted-foreground: 240 5% 64.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 85.7% 97.3%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --ring: 142.4 71.8% 29.2%;
      --chart-1: 220 70% 50%;
      --chart-2: 160 60% 45%;
      --chart-3: 30 80% 55%;
      --chart-4: 280 65% 60%;
      --chart-5: 340 75% 55%;
    }
  }
`;

console.log(convertShadcnVariables(variables));

function convertShadcnVariables(variables) {
    const regex = /--([\w\-]+): ([+-]?(?:[0-9]*[.])?[0-9]+) ([+-]?(?:[0-9]*[.])?[0-9]+)% ([+-]?(?:[0-9]*[.])?[0-9]+)%;/;

    return JSON.stringify(variables.split('\n')
        .map((line) => line.trim())
        .reduce((acc, line) => {
            const matches = regex.exec(line);
            if (matches) {
                const [_, name, h, s, l] = matches;

                if (!name.includes('chart')) {
                    acc[toCamelCase(name)] = hslToHex(h, s, l);
                }
            }

            return acc;
        }, {}), null, 2);
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function toCamelCase(text) {
    return text.replace(/-\w/g, clearAndUpper);
}

function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}
