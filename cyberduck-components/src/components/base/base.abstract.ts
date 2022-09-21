export abstract class BaseComponent {
    
    // Style
    // Use scoped styling to advantage by passing className instead, then styling it in the component itself
    public classNames: string[];

    // Functions
    public abstract mapStyle(style): void;

}

export abstract class CustomizableComponent extends BaseComponent {

    // Functions
    public abstract mapStyle(style): void;
}