export default async function getpartners() {
    const partners = await fetch('https://server.aiexpertcareer.com/partner');

    return partners.json();
};
