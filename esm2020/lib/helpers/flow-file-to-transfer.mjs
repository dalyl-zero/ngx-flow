export function flowFile2Transfer(flowFile) {
    return {
        id: flowFile.uniqueIdentifier,
        name: flowFile.name,
        progress: flowFile.progress(),
        averageSpeed: flowFile.averageSpeed,
        currentSpeed: flowFile.currentSpeed,
        size: flowFile.size,
        paused: flowFile.paused,
        error: flowFile.error,
        complete: flowFile.isComplete(),
        success: flowFile.isComplete() && !flowFile.error,
        timeRemaining: flowFile.timeRemaining(),
        flowFile
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdy1maWxlLXRvLXRyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZsb3cvc3JjL2xpYi9oZWxwZXJzL2Zsb3ctZmlsZS10by10cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsUUFBeUI7SUFDekQsT0FBTztRQUNMLEVBQUUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCO1FBQzdCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUM3QixZQUFZLEVBQUUsUUFBUSxDQUFDLFlBQVk7UUFDbkMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1FBQ25DLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtRQUNuQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07UUFDdkIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQ3JCLFFBQVEsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFO1FBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztRQUNqRCxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRTtRQUN2QyxRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJy4uL3RyYW5zZmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3dGaWxlMlRyYW5zZmVyKGZsb3dGaWxlOiBmbG93anMuRmxvd0ZpbGUpOiBUcmFuc2ZlciB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGZsb3dGaWxlLnVuaXF1ZUlkZW50aWZpZXIsXG4gICAgbmFtZTogZmxvd0ZpbGUubmFtZSxcbiAgICBwcm9ncmVzczogZmxvd0ZpbGUucHJvZ3Jlc3MoKSxcbiAgICBhdmVyYWdlU3BlZWQ6IGZsb3dGaWxlLmF2ZXJhZ2VTcGVlZCxcbiAgICBjdXJyZW50U3BlZWQ6IGZsb3dGaWxlLmN1cnJlbnRTcGVlZCxcbiAgICBzaXplOiBmbG93RmlsZS5zaXplLFxuICAgIHBhdXNlZDogZmxvd0ZpbGUucGF1c2VkLFxuICAgIGVycm9yOiBmbG93RmlsZS5lcnJvcixcbiAgICBjb21wbGV0ZTogZmxvd0ZpbGUuaXNDb21wbGV0ZSgpLFxuICAgIHN1Y2Nlc3M6IGZsb3dGaWxlLmlzQ29tcGxldGUoKSAmJiAhZmxvd0ZpbGUuZXJyb3IsXG4gICAgdGltZVJlbWFpbmluZzogZmxvd0ZpbGUudGltZVJlbWFpbmluZygpLFxuICAgIGZsb3dGaWxlXG4gIH07XG59XG4iXX0=