function object(type,v,x,y){
    this.type=type;
    this.v=v;
    this.x=x;
    this.y=y;
}
/**
 * heres what I think
 * object system with each object holding a definition/function of their motion from when initializer starts
 * the user requests our phys function output periodically at every frame beginning
 * our global clock still clicks behind this
 * each object will specify when exactly t=0 of their function is in terms of the global clock 
 */