const calculateVol = (height: number[], p1: number, p2: number): number => (p2 - p1) * Math.min(height[p1], height[p2])
function maxArea(height: number[]): number {
    let p1 = 0;
    let p2 = height.length - 1;
    let ps = p1;
    let pe = p2;
    let maxVol = calculateVol(height, ps, pe);
    while (p1 < p2) {
        const vol = calculateVol(height, p1, p2);
        if (vol > calculateVol(height, ps, pe)) {
            ps = p1;
            pe = p2;
            maxVol = vol;
        }
        if (height[p1] < height[p2]) p1++;
        else p2--;
    }

    return maxVol;
};