import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface KayakDesign {
    manufacturer: string;
    externalLink: string;
    name: string;
    imageUrl: string;
    designYear: bigint;
}
export interface backendInterface {
    addKayakDesign(name: string, manufacturer: string, designYear: bigint, imageUrl: string, externalLink: string): Promise<void>;
    getAllKayakDesigns(): Promise<Array<KayakDesign>>;
}
