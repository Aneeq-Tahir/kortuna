const baseUrl = 'https://www.khpalstore.com';

export default function robots() {
   return {
      rules: [
         {
            userAgent: '*'
         }
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl
   };
}
