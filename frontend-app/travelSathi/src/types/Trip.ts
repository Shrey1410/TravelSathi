export interface Trip {
    id: string;
    source: string;
    destination: string;
    startDate: string;
    endDate: string;
    budget: number;

    status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED";
}