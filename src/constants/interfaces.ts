export interface PathRouteProps {
    key?: string;
    caseSensitive?: boolean;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    index?: false;
    path: string;
}