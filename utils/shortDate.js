export default (dateStr) => {
            const date = new Date(dateStr)
            return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric', day: 'numeric' })
        }