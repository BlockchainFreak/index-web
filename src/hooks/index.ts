import { useRecoilState } from "recoil";
import { headerOpenState } from "@/state";

export const useHeaderOpenState = () => {
    const [headerOpen, setHeaderOpen] = useRecoilState(headerOpenState);
    return { headerOpen, setHeaderOpen };
}