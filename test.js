const linesOfBusiness = [
    { id: 11, name: 'General Liability', description: 'Liability coverage for businesses.' },
    { id: 12, name: 'Commercial Property', description: 'Property coverage for businesses.' },
    { id: 13, name: 'Inland Marine', description: 'Coverage for tools and machinery on job sites.' },
    { id: 14, name: 'Ocean Marine', description: 'Coverage for dock and boat repair businesses.' },
    { id: 15, name: 'Garage', description: 'Coverage for auto repairs and car sales.' }
  ];


  const recentQuotes = [
    { id: 101, quoteNumber: 'AC123PC', lineOfBusiness: 11 },
    { id: 102, quoteNumber: 'AC124PC', lineOfBusiness: 12 },
    { id: 103, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
    { id: 104, quoteNumber: 'AC126PC', lineOfBusiness: 14 },
    { id: 105, quoteNumber: 'AC127PC', lineOfBusiness: 15 },
    { id: 106, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
    { id: 107, quoteNumber: 'AC126PC', lineOfBusiness: 13 },
    { id: 108, quoteNumber: 'AC127PC', lineOfBusiness: 15 }
  ];

  console.log(recentQuotes);

  let map = new Map();
  let count = 1

  for(let i = 0; i < recentQuotes.length; i++){

    let currentLine = recentQuotes[i].lineOfBusiness;

    for(let j = 0; j < recentQuotes.length; j++){
      map.set(currentLine, count);

      if(map.has(currentLine)){
        count ++;
        map.set(currentLine,count);
      }
    }


  }

  console.log(count);

  console.log(map)