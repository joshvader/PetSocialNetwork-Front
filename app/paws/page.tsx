'use client';

import { veterinaries }         from '@/data';
import { FadeContent, PawCard } from '@/components/';


export default function PawsPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Centro de Patitas 🏥</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Mapa */}
                    <FadeContent
                        key             = { "map" }
                        blur            = { false }
                        duration        = { 1000 }
                        easing          = "ease-out"
                        initialOpacity  = { 0 }
                    >
                        <div className="bg-card rounded-lg shadow-md p-4 h-[600px] lg:sticky lg:top-8">
                            <div className="relative h-full w-full rounded-md overflow-hidden">
                                <iframe
                                    src             = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12345.67890!2d-3.703790!3d40.416775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1234567890"
                                    width           = "100%"
                                    height          = "100%"
                                    style           = {{ border: 0 }}
                                    allowFullScreen         
                                    loading         = "lazy"
                                    referrerPolicy  = "no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </FadeContent>

                    {/* Lista de veterinarias */}
                    <div className="space-y-6">
                        {veterinaries.map((vet) => (
                            <FadeContent
                                key             = { vet.id }
                                blur            = { false }
                                duration        = { 1000 }
                                easing          = "ease-out"
                                initialOpacity  = { 0 }
                            >
                                <PawCard key={vet.id} {...vet} />
                            </FadeContent>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}