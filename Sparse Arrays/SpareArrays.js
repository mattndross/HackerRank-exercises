function matchingStrings(strings, queries) {

    let counts = []

    for (let i = 0; i < queries.length; i++) {
        counts[i] = 0;
        for (let j = 0; j < strings.length; j++) {
            if (strings[j] === queries[i]) {
                counts[i]++
            }
        }
    }
    console.log({counts})
    return counts
}

matchingStrings(['ab','abcd','bjk', 'asliue','5ie9', 'abcd'], ['ab', 'abcd'])