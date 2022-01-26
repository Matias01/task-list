// aquí manejaremos la DB de mock-tasks.ts

export interface Task { 
    id?: number; // Cuando creamos podría no venir por eso se usa el '?'
    text: string;
    day: string;
    reminder: boolean
}