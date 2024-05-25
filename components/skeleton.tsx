// Byimaan

// _tw indicates that input is required in tailwind format.
type SkeletonDivTS = {
    h_tw ?: string,
    w_tw ?: string,
    bg_tw ?: string,
    p_tw ?: string,
    m_tw ?: string,
    className ?: string,
    children ?: React.ReactNode,
}

// const SkeletonDiv = ({h_tw='h-8', w_tw='w-8', bg_tw='bg-gray-600', className, children}: SkeletonDivTS) => {

//     if (!className) {
//         className = `${h'}`
//     };
//     <div className={className}></div>
// };