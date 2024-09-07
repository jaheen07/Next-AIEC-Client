export default async function getexperts() {
    const experts = await fetch('https://server.aiexpertcareer.com/experts',{
        next:{
            revalidate: 10,
        }
    });

    return experts.json();
};