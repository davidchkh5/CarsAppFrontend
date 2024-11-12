/** @type {import('next').NextConfig} */
const nextConfig = {
    logging:{
        fetches:{
<<<<<<< HEAD
            fullUrl: true
=======
            fullUrl:true
>>>>>>> 6a2215f9a2214421025603bad3a8016f14bf17cd
        }
    },
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'cdn.pixabay.com'}
        ]
    }
};

export default nextConfig;
