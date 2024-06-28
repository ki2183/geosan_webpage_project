import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://www.geosantech.kr/',
        lastModified: new Date('2024-06-28T01:55:52+00:00'),
        priority:1.00
    },
    {
        url: 'https://www.geosantech.kr/introduce',
        lastModified: new Date('2024-06-28T01:55:52+00:00'),
        priority:1.00
    },
    {
        url: 'https://www.geosantech.kr/cnc',
        lastModified: new Date('2024-06-28T01:55:52+00:00'),
        priority:0.5
    },
    {
        url: 'https://www.geosantech.kr/vendor',
        lastModified: new Date('2024-06-28T01:55:52+00:00'),
        priority:0.6
    },
  ]
}

