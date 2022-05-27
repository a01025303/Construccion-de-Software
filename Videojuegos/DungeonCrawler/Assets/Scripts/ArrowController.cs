using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArrowController : MonoBehaviour
{
    private Vector3 target; 
    public GameObject crosshairs;
    public GameObject arrow; 
    public float arrowSpeed = 0.01f;  
    public Vector3 shotArrowPos; 

    public bool shot = false; 
    private float time = 0.0f;
    public GameObject player; 
    public CollisionManagement colMan; 
    //public Rigidbody2D arrowRB; 
    // Start is called before the first frame update
    void Start()
    {
        colMan = FindObjectOfType<CollisionManagement>();
        Cursor.visible = false; 
        //Physics.IgnoreCollision(arrowPrefab.GetComponent<Collider>(), player.GetComponent<Collider>(), true);
    }

    // Update is called once per frame
    void Update()
    {
        target = transform.GetComponent<Camera>().ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, transform.position.z)); 
        crosshairs.transform.position = new Vector2(target.x , target.y); 
        //time += Time.deltaTime;
        Vector3 difference = target - player.transform.position;
        Vector3 difToPlayer = player.transform.position - arrow.transform.position;
        float rotationZ = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        float rotationZToPlayer = Mathf.Atan2(difToPlayer.y, difToPlayer.x) * Mathf.Rad2Deg;

        Debug.Log(arrow.GetComponent<Rigidbody2D>().position); 

        //float rotationZ = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        //player.transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ); 

        if(Input.GetMouseButtonDown(0) && shot == false)
        {
            shot = true; 
            arrow.transform.SetParent(null); 
            float distance = difference.magnitude;
            Vector2 direction = difference / distance; 
            direction.Normalize(); 
            arrow.transform.position = player.transform.position;  
            arrow.transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ);
            arrow.GetComponent<Rigidbody2D>().velocity = direction * arrowSpeed * Time.deltaTime;
            Debug.Log(arrow.GetComponent<Rigidbody2D>().position); 
            shot = true; 
        }
        
        /*if(Input.GetMouseButtonDown(0) && shot == true)
        {
            arrow.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Dynamic; 
            arrow.transform.position = Vector3.Lerp(arrow.transform.position, player.transform.position, time + Time.deltaTime / 10.0f);
            arrow.transform.SetParent(player.transform);
            shot = false;
            colMan.collided = false;
        }*/
        
        if(Input.GetMouseButtonDown(0) && shot == true)
        {
            arrow.transform.SetParent(null);
            arrow.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Dynamic; 
            arrow.transform.position = Vector3.MoveTowards(arrow.transform.position, player.transform.position, 0.9f * arrowSpeed * Time.deltaTime);
            arrow.transform.SetParent(player.transform);
            shot = false;
            colMan.collided = false;
            //if (arrow.transform.position == player.transform.position)
               // arrow.transform.SetParent(player.transform);
        }
        /*if(Input.GetMouseButtonDown(0) && shot == false)
        {
            float distance = difference.magnitude;
            Vector2 direction = difference / distance; 
            direction.Normalize(); 
            //fireArrow(direction, rotationZ);
            /*GameObject a = Instantiate(arrowPrefab) as GameObject; 
            a.transform.position = player.transform.position;  
            a.transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ);
            a.GetComponent<Rigidbody2D>().velocity = direction * arrowSpeed * Time.deltaTime;
            shot = true; *
        }*/
    }

    /*void fireArrow(Vector2 direction, float rotationZ){
        GameObject a = Instantiate(arrowPrefab) as GameObject; 
        a.transform.position = player.transform.position;  
        a.transform.rotation = Quaternion.Euler(0.0f, 0.0f, rotationZ);
        a.GetComponent<Rigidbody2D>().velocity = direction * arrowSpeed * Time.deltaTime;
        shot = true; 
    }
    
    
    if(Input.GetMouseButtonDown(0) && shot == true)
        {
            arrow.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Dynamic; 
            arrow.transform.position = Vector3.MoveTowards(arrow.transform.position, player.transform.position, arrowSpeed * Time.deltaTime * 0.00000000000f);
            arrow.transform.SetParent(player.transform);
            shot = false;
            colMan.collided = false;
        }
    
    */

    /*void retrieveArrow()
    {

    }*/
}
