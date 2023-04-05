
 const names = [
    'Adam', 'Adrian', 'Aleksander', 'Aleksandra', 'Alicja', 'Amelia', 'Anastazja', 'Andrzej', 'Antoni', 'Barbara', 'Bartłomiej', 'Beata', 'Cezary', 'Dagmara', 'Dariusz', 'Dawid', 'Dominik', 'Edyta', 'Ewa', 'Filip', 'Gabriel', 'Gabriela', 'Grzegorz', 'Hanna', 'Hubert', 'Igor', 'Irena', 'Iwona', 'Jakub', 'Jolanta', 'Julia', 'Juliusz', 'Justyna', 'Kacper', 'Kamil', 'Karol', 'Katarzyna', 'Kinga', 'Konrad', 'Kornelia', 'Krystian', 'Krystyna', 'Lidia', 'Łukasz', 'Maciej', 'Magdalena', 'Maja', 'Marek', 'Maria', 'Mariusz', 'Martyna', 'Mateusz', 'Michał', 'Monika', 'Natalia', 'Nikodem', 'Ola', 'Olga', 'Patrycja', 'Paweł', 'Paulina', 'Piotr', 'Rafał', 'Renata', 'Robert', 'Roksana', 'Ryszard', 'Sabina', 'Sandra', 'Sebastian', 'Sławomir', 'Stanisław', 'Sylwia', 'Tadeusz', 'Tomasz', 'Waldemar', 'Weronika', 'Wiktor', 'Wojciech', 'Zofia', 'Zuzanna'
  ];

  const wegetables = ['tomato', 'pumpkin', 'cucumber']

  


 export const RandomCustomer = () =>{
    const name = names[Math.floor(Math.random() * names.length)];
    const needs = wegetables[Math.floor(Math.random() * wegetables.length)];
    const quantity = Math.floor(Math.random() * (30 - 1 + 1)) + 1;

    return {name, quantity, needs}
  }