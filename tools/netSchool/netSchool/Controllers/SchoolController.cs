using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace netSchool.Controllers
{
    public class SchoolController : Controller
    {
        [HttpPostAttribute]
        public ActionResult login(string userId, string password)
        {
            //TODO: validate with DB records
            Dictionary<string, string> userData = new Dictionary<string, string>();
            userData.Add("userId", userId);

            if (userId == "test" && password == "welcome")
            {
                userData.Add("result", "true");
            }
            else
            {
                userData.Add("result", "false");
            }

            return Json(userData);
        }

        public ActionResult getStudents()
        {
            //TODO: use entity framework to fetch data from DB?
            var students = new List<Student> {
                    new Student {studentId="100", firstName="Jack", lastName ="Mark", std = "X Std"},
                    new Student {studentId="101", firstName="James", lastName ="Bond", std = "X Std"},
                    new Student {studentId="102", firstName="Debra", lastName ="Vermondas", std = "XI Std"},
                    new Student {studentId="103", firstName="Mark", lastName ="Brain", std = "XII Std"},
                };
            return Json(students,JsonRequestBehavior.AllowGet);
        }

    }
}
