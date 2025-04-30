export type InquiryCreate = {
    text: string;
    updated_at?: string;
    // add more fields here if needed
};
export type InquiryUpdate = {
    id: string;
    text: string; // ✅ remove `| undefined`
    message?: string;
    created_at?: string;
    updated_at?: string;
};
export type InquiryPublic = {
    id: string;
    text: string;
    created_at: string;
    updated_at?: string;
    message?: string; // optional
};