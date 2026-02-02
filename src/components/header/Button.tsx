
function Button({ title, className, children }: { title: string, className?: string, children?: React.ReactNode }) {
    
    return (
        <button className={"flex items-center " + className}>
            {children}
            {title}
        </button>
    )
}

export default Button