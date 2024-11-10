export default async function getpromos() {
    const promos = await fetch('https://server.aiexpertcareer.com/promo',{
        next:{
            revalidate: 10,
        }
    });

    return promos.json();
};
