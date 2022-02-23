const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  
 function findMatching(drivers, string){
     let answer = drivers.filter(element => element.toLowerCase()  === string.toLowerCase() )
     return answer;
 }

 function fuzzyMatch(drivers, string){
     return drivers
     .map((driver) => driver.split())
     .filter((splitDriver) => splitDriver[0] .indexOf(string))
 }
