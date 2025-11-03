import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = "website",
    author = "NOOR FURNISHINGS",
    publishedTime,
    modifiedTime,
    canonical
}) => {
    // Default values
    const defaultTitle = "NOOR FURNISHINGS - Premium Curtains, Carpets & Blinds";
    const defaultDescription = "Transform your space with NOOR FURNISHINGS - Premium curtains, carpets, bedcovers, blinds and upholstery. Luxury fabrics, expert craftsmanship, and custom interior solutions in Hyderabad.";
    const defaultImage = "/logo.png";
    const defaultUrl = "https://www.noorfurnishings.com";

    // Use provided values or defaults
    const pageTitle = title ? `${title} | NOOR FURNISHINGS` : defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageImage = image || defaultImage;
    const pageUrl = url || defaultUrl;
    const pageKeywords = keywords || "curtains, carpets, blinds, bedcovers, upholstery, interior design, home decor, Hyderabad";

    // Schema.org structured data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "NOOR FURNISHINGS",
        "url": pageUrl,
        "description": pageDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressCountry": "IN"
        },
        "telephone": "+91-9177480706",
        "email": "info@noorfurnishings.com",
        "priceRange": "$$-$$$",
        "image": pageImage,
        "sameAs": [
            "https://www.facebook.com/noorfurnishings",
            "https://www.instagram.com/noorfurnishings"
        ]
    };

    // Article schema for product pages
    if (type === "article" && (publishedTime || modifiedTime)) {
        structuredData["@type"] = "Article";
        structuredData.author = {
            "@type": "Organization",
            "name": author
        };
        if (publishedTime) structuredData.datePublished = publishedTime;
        if (modifiedTime) structuredData.dateModified = modifiedTime;
    }

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={canonical || pageUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:alt" content={pageTitle} />
            <meta property="og:site_name" content="NOOR FURNISHINGS" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:image:alt" content={pageTitle} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;