
export const ThemeOptions = {
    light: {
        theme: {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black"
        }
    },
    dark: {
        theme: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white"
        }
    },
    violet: {
        theme: {
            backgroundColor: "violet",
            color: "purple",
            border: "1px solid purple"
        }
    },
    darkBlue: {
        theme: {
            backgroundColor: "darkBlue",
            color: "white",
            border: "1px solid lightskyblue"
        }
    },
}


export function getColor() {
    return localStorage.getItem("theme") || "light"
}