import 'bootstrap-icons/font/bootstrap-icons.css';

export const WhatchFace = (props) => {
        const { time, gmt, handelDelete } = props;
        let hours = time.hours;
        let minutes = time.minutes;
        let seconds = time.seconds;
        
        const regExHours = (obj) => {
            if (obj.gmt) {
                let hoursWithOffset = +hours + Number(+obj.gmt.slice(3, 6))
                return hoursWithOffset>0 ? String(hoursWithOffset) : String(12 + hoursWithOffset)
            }
            return "+0"
        }

        const regExMinutes = (obj) => {
            let minutesWithOffset = +minutes + Number(+obj.gmt.slice(7, 9))
            if (obj.gmt) {
                return minutesWithOffset>0 ? String(minutesWithOffset) : String(60 + minutesWithOffset)
            }
            return "+0"
        }

        return (
            <div className="clock-container">
                <i className="bi bi-x-square" onClick={() => handelDelete(gmt)}></i>
                <div className="clock-city">{ gmt.city }</div>
                <time className="clock">
                    <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
                    <span className="clock__stroke clock__stroke--5"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
                    <span className="clock__stroke clock__stroke--10"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
                    <span className="clock__stroke clock__stroke--15"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
                    <span className="clock__stroke clock__stroke--20"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
                    <span className="clock__stroke clock__stroke--25"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
                    <span className="clock__stroke clock__stroke--30"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
                    <span className="clock__stroke clock__stroke--35"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
                    <span className="clock__stroke clock__stroke--40"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
                    <span className="clock__stroke clock__stroke--45"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
                    <span className="clock__stroke clock__stroke--50"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
                    <span className="clock__stroke clock__stroke--55"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
                    <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
                    <span className="clock__stroke clock__stroke--60"></span>

                    <span className="clock__hand clock__hand--hour" style={ {'transform': `rotate(${regExHours(gmt) *30 + (regExMinutes(gmt)*(0.5))}deg)`} }></span>
                    <span className="clock__hand clock__hand--minute" style={ {'transform': `rotate(${regExMinutes(gmt)*6}deg)`} }></span>
                    <span className="clock__hand clock__hand--second" style={ {'transform': `rotate(${seconds*6}deg)`} }></span>
                </time>
            </div>
        )
}