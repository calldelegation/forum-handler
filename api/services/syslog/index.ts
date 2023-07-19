import fs from 'fs';

export function syslog(entry: any): void {
    const filePath = `${__dirname}/../../syslogs.json`;
    console.log('syslog', entry);
    const timestamp = getCurrentUnixTimestamp();


    // Read existing entries from the file, or initialize an empty array
    let entries: string[] = [];
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        entries = JSON.parse(fileData);
    }

    // Add the new entry to the array
    entries.push({ ...entry, timestamp });

    // Write the updated array to the file
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
}

export function getCurrentUnixTimestamp(): number {
    const currentTime = Date.now();
    const unixTimestamp = Math.floor(currentTime / 1000);
    return unixTimestamp;
}
