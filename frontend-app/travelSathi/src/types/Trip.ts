/**
 * This interface represents the Trip object in the Backend
 */
export interface Trip {
    id: string;
    userId: string,
    source: string;
    destination: string;
    startDate: string;
    endDate: string;
    numberOfTravelers: number;
    additionalPreference: string;
    createdAt: string;
    updatedAt: string;
}