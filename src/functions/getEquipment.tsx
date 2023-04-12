import { getUserId } from "./getUserId";

export const getEquipment = async () => {
    const userId = await getUserId()
    if (userId !== 0) {
     try {
      const res = await fetch(`http://localhost:3001/equipment/`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             userId: userId,
         })
     });
     const data = await res.json()

    return data[0];
    } catch (err) {
    }
 }};

export const getSeed = async (item:string) => {
    const userId = await getUserId()
    if (userId !== 0) {
     try {
      const res = await fetch(`http://localhost:3001/equipment/`, {
         method: 'PATCH',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             userId: userId,
         } )
    });
    const data = await res.json()
    if (item === 'tomato') {
        return data[0].tomatoSeed;
    }
    if (item === 'cucumber') {
        return data[0].cucumberSeed;
    }
    if (item === 'pumpkin') {
        return data[0].pumpkinSeed;
    }
    } catch (err) {
    }
}
};