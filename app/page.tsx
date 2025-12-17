import CategoriesSection from "@/components/home/categories-section";
import CTASection from "@/components/home/cta-section";
import FeaturedProducts from "@/components/home/featured-products";
import FeaturesSection from "@/components/home/features-section";
import Hero from "@/components/home/hero";
import MainLayout from "@/components/layout/main-layout";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <CategoriesSection />
            <FeaturedProducts />
            <FeaturesSection />
            <CTASection />
        </MainLayout>
    );
}
