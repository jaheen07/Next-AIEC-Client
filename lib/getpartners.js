export default async function getpartners() {
    const partners = await fetch('https://server.aiexpertcareer.com/partner',{
        next:{
            revalidate: 10,
        }
    });

    return partners.json();
};
