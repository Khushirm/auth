import {db} from "@/lib/db";

export const getVerificationTokenByToken = async (
    token : string
) => {
    try {
        const VerificationToken = await db.verificationToken.findUnique({
            where:{token}
        });
        return VerificationToken;
    }catch{
        return null;
    }
}

export const getVerificationTokenByEmail = async (
    email : string
) => {
    try {
        const VerificationToken = await db.verificationToken.findFirst({
            where:{email}
        });
        return VerificationToken;
    }catch{
        return null;
    }
}