const matchCron = (cron, date, [m, h, dM, M, dW] = cron.split(' ')) => ((m === '*' || m == date.getMinutes()) &&
    (h === '*' || h == date.getHours()) &&
    (dM === '*' || dM == date.getDate()) &&
    (M === '*' || M == date.getMonth() + 1) &&
    (dW === '*' || dW === 7 && date.getDay === 0 || date.getDay !== 0 && Number(dW) === date.getDay())); 