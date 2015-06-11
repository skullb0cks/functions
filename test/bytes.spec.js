describe('쇼핑박스', function() {
    it('글자수에 따른 Break boolean 얻기', function() {
        var limit = 23;
        var text = '일이삼사오육칠팔구십';
        var check = isBreak(text, limit);
        expect(check).toBe(false);
    });

    it('글자수에 따른 Break boolean 얻기 (배열로 문자열 입력)', function() {
        var limit = 23;
        var text = ['일이삼사오육칠팔구십', '일이삼사오육칠팔구십', '일이삼사오육칠팔구십', '십'];
        var remain = limit;
        var check;

        check = isBreak(text[0], remain);
        expect(check).toBe(false);
        remain -= text[0].length;
        expect(remain).toBe(13);

        check = isBreak(text[1], remain);
        expect(check).toBe(false);
        remain -= text[1].length;
        expect(remain).toBe(3);

        check = isBreak(text[2], remain);
        expect(check).toBe(true);
        remain = limit;
        expect(remain).toBe(23);

        check = isBreak(text[3], remain);
        expect(check).toBe(false);
        remain -= text[3].length;
        expect(remain).toBe(22);
    });
});