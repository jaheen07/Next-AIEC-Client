export default async function test() {
    const res = await fetch('https://server.aiexpertcareer.com/courses', {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldmVsb3Blci5haWVjQGdtYWlsLmNvbSIsImlhdCI6MTcyNDkyODIzOSwiZXhwIjoxNzI1NTMzMDM5fQ.wJO__syPivm1p1e_xM89oloQdrKFlWrgsevTkMOKVoo',
        },
      })
    return res.json()
};
