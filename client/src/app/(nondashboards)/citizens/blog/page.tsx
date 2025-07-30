"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ContactFormSection from "@/components/UIs/ContactUs/ContactUs";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Stagger the appearance of child elements
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Page Header */}
            <header className="bg-daba-bg-teal py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto"
                    >
                        Insights, Stories, and Updates from the World of Daba.Cities
                    </motion.p>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Introduction */}
                        <motion.section variants={itemVariants} className="space-y-4">
                            <p className="text-gray-700 text-lg">
                                At Daba.Cities, we believe that cities are living ecosystems, constantly evolving and shaping the way we
                                experience urban life. Our blog is dedicated to exploring cities, uncovering hidden urban dynamics, and
                                sparking conversations about sustainable development, innovation, and community-driven transformation.
                            </p>
                        </motion.section>

                        {/* Blog Post Categories */}
                        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* City Explorations */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-daba-green">City Explorations</CardTitle>
                                    <CardDescription>Weekly Urban Insights</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        Every week, we step into the streets—exploring neighborhoods, emerging trends, and transformative
                                        projects that are redefining urban spaces.
                                    </p>
                                    <Button variant="link" className="text-daba-teal px-0 mt-4">
                                        Explore City Explorations
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Events & Urban Daily */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-daba-green">Events &amp; Urban Daily</CardTitle>
                                    <CardDescription>Key Urban Events and Trends</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        From sustainability summits to architecture exhibitions, we cover the most interesting urban events
                                        and trends in design, real estate, and mobility.
                                    </p>
                                    <Button variant="link" className="text-daba-teal px-0 mt-4">
                                        Discover Urban Events
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Daba.Citizens */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-daba-green">Daba.Citizens</CardTitle>
                                    <CardDescription>Community Champions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        We share stories about our team, collaborators, and partners, showcasing their expertise and
                                        contributions to sustainable urban innovation.
                                    </p>
                                    <Button variant="link" className="text-daba-teal px-0 mt-4">
                                        Meet Daba.Citizens
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* New Products & Innovations */}
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-daba-green">New Products &amp; Innovations</CardTitle>
                                    <CardDescription>Latest Urban Developments</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">
                                        Stay up to date on our latest products, technologies, and services that are pushing the boundaries
                                        of urban development.
                                    </p>
                                    <Button variant="link" className="text-daba-teal px-0 mt-4">
                                        Explore Innovations
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.section>

                        {/* Call to Action */}
                        <motion.section variants={itemVariants} className="text-center">
                            <p className="text-gray-700 text-lg">
                                The Daba.Cities blog is your gateway to urban exploration, innovation, and collaboration. Join us on this
                                journey—one city at a time.
                            </p>
                            <Button className="mt-6 bg-daba-teal text-white hover:bg-daba-green px-8 py-3 rounded-full">
                                <a href="/blog" className="flex items-center gap-2">
                                    Visit the Blog <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </motion.section>
                    </motion.div>
                </div>
            </main>
            <ContactFormSection />
        </div>
    );
};

export default BlogPage;