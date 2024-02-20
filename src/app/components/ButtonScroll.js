'use client'
import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const DynamicScrollButton = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(sections[0]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Escuchar eventos de desplazamiento de react-scroll
        Events.scrollEvent.register('begin', function (to, element) {
            setCurrentSection(to);
        });

        // Establecer visibilidad después de un retraso
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => {
            clearTimeout(timer);
            Events.scrollEvent.remove('begin');
        };
    }, []);

    // Calcular la próxima sección para el enlace del botón
    const nextSection = () => {
        const currentIndex = sections.findIndex(section => section === currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex];
    };

    const isLastSection = currentSection === sections[sections.length - 1];
    // NOTE: Este componente solo se muestra en pantallas grandes
    // TODO: Agregar soporte para pantallas pequeñas o evitar el renderizado en pantallas pequeñas
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-10 right-1/2 transform translate-x-1/2 z-50 hidden sm:block"
                >
                    <Link to={nextSection()} smooth={true} duration={500} offset={0}>
                        <button className="p-3 bg-blue-500 text-white rounded-full focus:outline-none">
                            {isLastSection ? <FaArrowUp /> : <FaArrowDown />}
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DynamicScrollButton;
