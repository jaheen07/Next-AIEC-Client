export default async function geteventbanners() {
    const banners = await fetch('https://server.aiexpertcareer.com/banners',{
        next:{
            revalidate: 10,
        }
    });

    return banners.json();
};
