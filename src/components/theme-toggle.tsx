"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

 useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button
            variant='outline'
            size='icon'
            className="lg:-mt-2 bg-transparent hover:bg-transparent">
      <Sun className="h-5 w-5" />
    </Button>;
  }

  return (
    <Button
       variant="outline"
       size="icon"
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
       className="lg:-mt-2 bg-transparent hover:bg-transparent"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
    </Button>
  );
}